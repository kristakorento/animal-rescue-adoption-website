import React from "react";
import testi1 from "../assets/images/testi1.jpg";

function DogProfiles() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">Dogs</h1>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Find your new best friend from our adorable pups waiting for a forever home.
        </p>
      </div>

      {/* White Box Container for Dog Cards */}
      <div className="bg-white px-4 py-8">
        {/* Grid Layout with 3 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Dog Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:scale-105 duration-300">
            <img src={testi1} alt="Dog 1" className="w-full h-48 rounded-xl mb-4 object-cover" />
            <h2 className="text-2xl font-semibold text-gray-800">Bella</h2>
            <p className="text-gray-600">Breed: Golden Retriever</p>
            <p className="text-gray-600">Age: 2 years</p>
            <p className="text-gray-600">Location: Woofville</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Adopt Me</button>
          </div>

          {/* Dog Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:scale-105 duration-300">
            <img src={testi1} alt="Dog 2" className="w-full h-48 rounded-xl mb-4 object-cover" />
            <h2 className="text-2xl font-semibold text-gray-800">Max</h2>
            <p className="text-gray-600">Breed: Beagle</p>
            <p className="text-gray-600">Age: 3 years</p>
            <p className="text-gray-600">Location: Barktown</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Adopt Me</button>
          </div>

          {/* Dog Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:scale-105 duration-300">
            <img src={testi1} alt="Dog 3" className="w-full h-48 rounded-xl mb-4 object-cover" />
            <h2 className="text-2xl font-semibold text-gray-800">Luna</h2>
            <p className="text-gray-600">Breed: Husky</p>
            <p className="text-gray-600">Age: 1 year</p>
            <p className="text-gray-600">Location: Snuggle City</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Adopt Me</button>
          </div>

          {/* Dog Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:scale-105 duration-300">
            <img src={testi1} alt="Dog 4" className="w-full h-48 rounded-xl mb-4 object-cover" />
            <h2 className="text-2xl font-semibold text-gray-800">Charlie</h2>
            <p className="text-gray-600">Breed: Poodle</p>
            <p className="text-gray-600">Age: 4 years</p>
            <p className="text-gray-600">Location: Pawradise</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Adopt Me</button>
          </div>

          {/* Dog Card 5 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:scale-105 duration-300">
            <img src={testi1} alt="Dog 5" className="w-full h-48 rounded-xl mb-4 object-cover" />
            <h2 className="text-2xl font-semibold text-gray-800">Daisy</h2>
            <p className="text-gray-600">Breed: Labrador</p>
            <p className="text-gray-600">Age: 2.5 years</p>
            <p className="text-gray-600">Location: Tailtown</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Adopt Me</button>
          </div>

          {/* Dog Card 6 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:scale-105 duration-300">
            <img src={testi1} alt="Dog 6" className="w-full h-48 rounded-xl mb-4 object-cover" />
            <h2 className="text-2xl font-semibold text-gray-800">Rocky</h2>
            <p className="text-gray-600">Breed: Border Collie</p>
            <p className="text-gray-600">Age: 5 years</p>
            <p className="text-gray-600">Location: Floofy Hills</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Adopt Me</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DogProfiles;
