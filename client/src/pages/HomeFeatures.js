import React from 'react'
import Navbar from '../components/Navbar';

import features from '../images/features-small.jpg';
import faq from '../images/faq-small.jpg';
import aboutus from '../images/aboutus-small.jpg';

function HomeFeatures() {
  return (
    <div>
      <div className="flex-row justify-center">
        <Navbar />
      </div>
      <div className="flex justify-evenly">
        <div className="flex-column w-1/6">
          <div>
            <img className="rounded-md h-54 mt-10" src={features} alt="a table full of meals" />
          </div>
          <h2 className="py-3 bg-blue-400 text-xl flex justify-center font-mono">COMMON FEATURES</h2>
          <div className="mt-6 mb-20">
            <ul>
              <li>
                <h3 className="text-l font-semibold">ADVANCED SEARCH</h3>
                <br />
                Search recipes with any keyword and filter results with calorie preferences. You can perform your search based on cuisines of different regions (Asian, American...), ingredients (pasta, apples...), dish names (miso soup, pizza...) and with any key word you like. You can also check any recipe's full details from the original source by clicking on its image or title.
              </li>
              <br />
              <li>
                <h3 className="text-l font-semibold">MY COLLECTION</h3>
                <br />
                Save the recipe cards that you like to your collection and create your own database of favorites.
              </li>
              <br />
              <li>
                <h3 className="text-l font-semibold">OUTLOUD</h3>
                <br />
                Once saved, you will be able to listen to your recipe's summary or instructions or ingredients so that you can free your hands and eyes while cooking.
              </li>
              <br />
              <li>
                <h3 ><span className="text-l font-semibold">ADD NOTES </span><span>(coming soon)</span></h3>
                <br />
                Cooking takes practice and you can record your experiences by adding notes to your recipe cards.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-column w-1/6">
          <div>
            <img className="rounded-md h-54 pt-10 rounded" src={faq} alt="a table full of meals" />
          </div>
          <h2 className="py-3 bg-blue-400 text-xl flex justify-center font-mono">FAQ</h2>

          <div >
            <ul>
              <li className="mt-6">
                <span className="font-semibold">Which browsers support "Read OutLoud" feature?</span><br /><br /><span className="italic">Use Microsoft Edge and Mozilla Fire Fox for best experience. Google Chrome has issues with sound quality and length of speech.</span>
              </li>
              <li className="mt-6">
                <span className="font-semibold">What is your data source?</span><br /><br /><span className="italic">Spoonacular API - https://spoonacular.com/food-api</span>
              </li>
              <li className="mt-6">
                <span className="font-semibold">How long it took to create "Recipes OutLoud"?</span><br /><br /><span className="italic">Everyone tried to spare as much time as possible out of their regular job routines over a two-week time frame.</span>
              </li>
              <li className="mt-6">
                <span className="font-semibold">Which technologies are utilized at "Recipes OutLoud"?</span><br /><br /><span className="italic">It has a MERN stack architecture with Tailwindcss. Text to speech functionality is run by react-speech component.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-column w-1/6">
          <div>
            <img className="rounded-md h-54 pt-10 rounded" src={aboutus} alt="a table full of meals" />
          </div>
          <h2 className="py-3 bg-blue-400 text-xl flex justify-center font-mono">ABOUT US</h2>
          <div className="mt-6">
            <ul className="text-indigo-800 list-none font-semibold">
              <li>
                Broc CROOK | <a href="https://github.com/bac5806" target="blank" className="text-sm md:no-underline md:hover:underline md:hover:text-green-600">@GitHub</a> | <a href="https://www.linkedin.com/in/broc-crook-02248943/" target="blank" className="text-sm md:no-underline md:hover:underline md:hover:text-green-600">@LinkedIn</a>
              </li>
              <li>
                Abner TORIBIO-VAZQUEZ | <a href="https://github.com/AbnerTor" target="blank" className="text-sm md:no-underline md:hover:underline md:hover:text-green-600">@GitHub</a> | <a href="https://www.linkedin.com/in/toribioabner/" target="blank" className="text-sm md:no-underline md:hover:underline md:hover:text-green-600">@LinkedIn</a>
              </li>
              <li>
                Brian McMULLEN | <a href="https://github.com/MrBmmc" target="blank" className="text-sm md:no-underline md:hover:underline md:hover:text-green-600">@GitHub</a> | <a href="https://www.linkedin.com/in/brian-mcmullen-b9063720b/" target="blank" className="text-sm md:no-underline md:hover:underline md:hover:text-green-600">@LinkedIn</a>
              </li>
              <li>
                Ali ARAN | <a href="https://github.com/AranATA" target="blank" className="text-sm md:no-underline md:hover:underline md:hover:text-green-600">@GitHub</a> | <a href="https://www.linkedin.com/in/ghibli/" target="blank" className="text-sm md:no-underline md:hover:underline md:hover:text-green-600">@LinkedIn</a>
              </li>
            </ul>
          </div>
          <p className="mt-6">
            We are Team BABA, a team of four students at UNC's 2021 Full Stack Web Development Boot Camp. "Recipes OutLoud" application is our graduation project and displays a wide spectrum of coding skills that we mastered as aspiring web developers.
            <br />
            <br />
            We all come from different backgrounds with the common goal of learning and discovering how to code. With no prior knowledge or experience in the field, we are successfully finishing an intense program that taught us the newest technologies. "Recipes OutLoud" is not only a manifestation of such knowledge but also our ability to work as a team, at both front end and back end tasks.
            <br />
            <br />
            We are very proud to create "Recipes OutLoud" and hope you enjoy it too.
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}

export default HomeFeatures
