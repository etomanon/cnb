const express = require("express");
const got = require("got");
const endOfLine = require("os").EOL;
const router = express.Router();

const sample = `27.09.2019 #188\nzemě|měna|množství|kód|kurz\nAustrálie|dolar|1|AUD|15,964\nBrazílie|real|1|BRL|5,681\nBulharsko|lev|1|BGN|13,212\nČína|žen-min-pi|1|CNY|3,316\nDánsko|koruna|1|DKK|3,461\nEMU|euro|1|EUR|25,840\nFilipíny|peso|100|PHP|45,548\nHongkong|dolar|1|HKD|3,015\nChorvatsko|kuna|1|HRK|3,487\nIndie|rupie|100|INR|33,527\nIndonesie|rupie|1000|IDR|1,668\nIsland|koruna|100|ISK|19,155\nIzrael|nový šekel|1|ILS|6,783\nJaponsko|jen|100|JPY|21,861\nJižní Afrika|rand|1|ZAR|1,568\nKanada|dolar|1|CAD|17,832\nKorejská republika|won|100|KRW|1,972\nMaďarsko|forint|100|HUF|7,701\nMalajsie|ringgit|1|MYR|5,643\nMexiko|peso|1|MXN|1,204\nMMF|ZPČ|1|XDR|32,251\nNorsko|koruna|1|NOK|2,606\nNový Zéland|dolar|1|NZD|14,863\nPolsko|zlotý|1|PLN|5,891\nRumunsko|leu|1|RON|5,437\nRusko|rubl|100|RUB|36,727\nSingapur|dolar|1|SGD|17,114\nŠvédsko|koruna|1|SEK|2,415\nŠvýcarsko|frank|1|CHF|23,795\nThajsko|baht|100|THB|77,098\nTurecko|lira|1|TRY|4,177\nUSA|dolar|1|USD|23,633\nVelká Británie|libra|1|GBP|29,104\n`;

// get exchange rates
router.get("/", async (req, res, next) => {
  try {
    // const response = await got(
    //   "http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt"
    // );
    // const split = response.body.split(endOfLine);
    const split = sample.split(endOfLine);
    // remove headers and extract currency code & rate to CZK only
    const data = split.slice(2, -1).map(country => {
      const info = country.split("|");
      if (info.length > 4)
        return {
          // currency code
          label: info[3],
          // exchange rate to CZK
          value: parseFloat(info[4].replace(",", "."))
        };
    });
    return res.json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
