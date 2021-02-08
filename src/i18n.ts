import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import moment from "moment";
import "moment/locale/pl";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      format: function (value, formatting, lng) {
        if (value instanceof Date) {
          moment.locale(lng);
          return moment(value).format(formatting);
        }
        return value.toString();
      },
    },
  });

export default i18n;
