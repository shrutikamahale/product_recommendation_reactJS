import React from "react";
import "./styles.css";
import { useState } from "react";

const cosmaticsDB = {
  Makeup: [
    {
      name: "Foundation",
      brand: "M.A.C Studio Fix Fluid SPF 15 - NC12",
      rating: "4.5/5"
    },
    {
      name: "Kajal",
      brand: "Lakme Absolute Kohl Ultimate Kajal - Black",
      rating: "4.2/5"
    },
    {
      name: "Lipstick",
      brand: "M.A.C Retro Matte Lipstick - Ruby Woo",
      rating: "4.5/5"
    },
    {
      name: "Compact",
      brand: "M.A.C Studio Fix Powder Plus Foundation",
      rating: "4.7/5"
    }
  ],

  Skin: [
    {
      name: "Cleanser",
      brand: "The Face Shop Rice Water Bright Foaming Cleanser",
      rating: "4.6/5"
    },
    {
      name: "Moisturiser",
      brand: "Innisfree Aloe Vera Revital Soothing Gel",
      rating: "4.5/5"
    },
    { name: "Toner", brand: "Kama Ayurveda Pure Rose Water", rating: "4.5/5" },
    {
      name: "Sunscreen",
      brand: "Neutrogena UltraSheer Dry Touch Sunblock SPF 50+",
      rating: "4.5/5"
    }
  ],

  Hair: [
    {
      name: "Shampoo",
      brand: "LOreal Professionnel X-Tenso Care Pro-Keratine + Incell Shampoo",
      rating: "4.6/5"
    },
    {
      name: "Conditioner",
      brand:
        "Herbal Essences Bio:Renew Repair Argan Oil of Morocco Conditioner",
      rating: "4.5/5"
    },
    {
      name: "Hair Oil",
      brand: "WOW Skin Science Onion Black Seed Hair Oil",
      rating: "4.5/5"
    },
    {
      name: "Hair Serum",
      brand: "L'Oreal Paris Extraordinary Oil Serum",
      rating: "4.3/5"
    }
  ],

  Personal_Care: [
    {
      name: "Shower Gel and Body Wash",
      brand: "Dove Deeply Nourishing Body Wash",
      rating: "4.5/5"
    },
    {
      name: "Lotion and Creams",
      brand: "NIVEA Body Lotion Nourishing Body Milk",
      rating: "4.5/5"
    },
    {
      name: "Scrub and Exfoliants",
      brand: "MCaffeine Naked & Raw Coffee Body Scrub",
      rating: "4.7/5"
    },
    { name: "Sops", brand: "Khadi Natural Handmade Soap", rating: "4.4/5" }
  ],
  Baby_Care: [
    {
      name: "Body wash and Soap",
      brand: "The Moms Co. Tear-Free Natural Baby Wash",
      rating: "4.5/5"
    },
    { name: "Baby Oil", brand: "Himalaya Baby Massage Oil", rating: "4.5/5" },
    {
      name: "Baby Powder",
      brand: "The Moms Co. Talc-Free Natural Baby Powder",
      rating: "4.6/5"
    },
    {
      name: "Diapers",
      brand: "Himalaya Total Care Baby Pants",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Hair");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> You are beautiful 😍 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout the products mentioned in list to shine beauty in you.{" "}
      </p>

      <div>
        {Object.keys(cosmaticsDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {cosmaticsDB[selectedGenre].map((cosmatics) => (
            <li
              key={cosmatics.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {cosmatics.name} </div>
              <div style={{ fontSize: "smaller" }}> {cosmatics.brand} </div>
              <div style={{ fontSize: "smaller" }}> {cosmatics.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
