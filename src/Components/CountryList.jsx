import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";

import Spinner from "./Spinner";
import Message from "./Message.jsx";
import { useCities } from "../contexts/CitiesContext.jsx";

export default function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Click on the map to add your first country!" />;

  const countries = cities.reduce((acc, val) => {
    const countriesArr = acc.map((el) => el.country);
    const valArr = { country: val.country, emoji: val.emoji };
    if (!countriesArr.includes(valArr.country)) {
      return [...acc, valArr];
    } else {
      return acc;
    }
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}
