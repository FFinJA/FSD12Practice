"use client";

import { useContext } from "react";
import CitiesContext from "../lib/CiitesContext";
import { CurrentTemperatureInCityCard } from "./CurrentWeather";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function CityList() {
  const cities = useContext(CitiesContext);

  const pathname = usePathname();

  if (cities.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-full flex-col">
      {cities.map((city) => {
        const linkurl =
          city.display_order === 0 ? "/weather" : `/weather/${city.id}`;
        return (
          <Link key={city.display_order} href={linkurl}>
            <div
              key={city.display_order}
              className={clsx(
                "flex h-[48px] w-full gap-2 bg-gray-50  hover:bg-sky-100",
                { "bg-sky-100 text-blue-600": pathname === linkurl }
              )}
            >
              <h1>{city.name}</h1>
              <p>{city.display_order}</p>
              <CurrentTemperatureInCityCard weatherData={city.currentweather} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
