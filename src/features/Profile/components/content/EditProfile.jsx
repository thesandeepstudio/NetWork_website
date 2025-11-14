import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const EditProfile = () => {
  return (
    <form>
      <div className="space-y-12">
        {/* ==== PROFILE SECTION ==== */}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Update your freelancer profile — this is what clients will see when they visit your page.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                Profile URL
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                    network.com/
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="johnsmith"
                    className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                Bio
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={4}
                  placeholder="Tell clients about your skills, experience, and what makes you stand out..."
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">
                This helps clients understand your expertise and work style.
              </p>
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                Profile Picture
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                <button
                  type="button"
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs border border-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                Portfolio Banner
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                  <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-600">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==== PERSONAL INFORMATION ==== */}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm/6 text-gray-600">Clients use this info to verify your identity and location.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                First name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                placeholder="John"
                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Last name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                placeholder="Smith"
                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="johnsmith@email.com"
                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                Country
              </label>
              <div className="mt-2 grid grid-cols-1 relative">
                <select
                  id="country"
                  name="country"
                  className="w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>Nepal</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
                <ChevronDownIcon aria-hidden="true" className="absolute right-2 top-3 size-5 text-gray-500" />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="skills" className="block text-sm/6 font-medium text-gray-900">
                Skills
              </label>
              <input
                id="skills"
                name="skills"
                type="text"
                placeholder="e.g., React, Node.js, Figma, SEO, Content Writing"
                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <p className="mt-2 text-sm/6 text-gray-500">
                Separate skills with commas. These help clients find you in search.
              </p>
            </div>
          </div>
        </div>

        {/* ==== NOTIFICATIONS ==== */}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Control which types of messages and project updates you receive.
          </p>

          <div className="mt-10 space-y-8">
            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">Email Notifications</legend>
              <div className="mt-6 space-y-5">
                {["Project Updates", "Messages", "Promotions"].map((label, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={label}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      defaultChecked={i === 0}
                    />
                    <label htmlFor={label} className="text-sm/6 text-gray-700">
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      {/* ==== ACTION BUTTONS ==== */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
