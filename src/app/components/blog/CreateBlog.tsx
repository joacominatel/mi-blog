import ProjectBlog from "@/app/interfaces/ProjectBlog";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function CreateBlog() {
  // not nullable params to create a new blog
  // title, an image, body description, link to github, currently working,
  const [title, setTitle] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [shortDescription, setShortDescription] = useState<string>("");
  const [longBody, setLongBody] = useState<string>("");
  const [linkGithub, setLinkGithub] = useState<string>("");
  const [currentlyWorking, setCurrentlyWorking] = useState<boolean>(false);

  // nullable params to create a new blog
  // short description, another link, category, languages used, collaborators, initial date, final date
  const [anotherLink, setAnotherLink] = useState<string>("");
  const [category, setCategory] = useState<string[]>([]);
  const [languagesUsed, setLanguagesUsed] = useState<string[]>([]);
  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [initialDate, setInitialDate] = useState<string>("");
  const [finalDate, setFinalDate] = useState<string>("");

  const [showAdvancedOptions, setShowAdvancedOptions] =
    useState<boolean>(false);

  // function to create a new blog
  async function handleSubmit() {
    try {
      const response = await axios.post("/api/projects", {
        title,
        imageUrl,
        shortDescription,
        longBody,
        linkGithub,
        currentlyWorking,
        anotherLink,
        category,
        languagesUsed,
        collaborators,
        initialDate,
        finalDate,
      });
      if (response.status === 201) {
        console.log("Blog created successfully");
        setTitle("");
        setImageUrl("");
        setShortDescription("");
        setLongBody("");
        setLinkGithub("");
        setCurrentlyWorking(false);
        setAnotherLink("");
        setCategory([]);
        setLanguagesUsed([]);
        setCollaborators([]);
        setInitialDate("");
        setFinalDate("");

        Swal.fire({
          icon: "success",
          title: "Blog created successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        // reload the page to show the new blog
        window.location.reload();
      } else {
        console.log("Error creating blog");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }

  return (
    <div
      className="h-full w-full bg-code-bg bg-opacity-90 fixed top-0 left-0 flex justify-center items-center"
      id="create-blog"
    >
      <div className="fixed bg-code-bg-light w-1/3 p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
        {/* not nullable options */}
        <h1 className="text-2xl text-white text-center">Create a new blog</h1>
        <div className="grid grid-cols-2 gap-6 p-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          {/* for imageURL, can upload an image  */}
          <input
            type="file"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="p-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              
            </input>
          <input
            type="text"
            placeholder="Short description"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className="p-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <input
            type="text"
            placeholder="Long body"
            value={longBody}
            onChange={(e) => setLongBody(e.target.value)}
            className="p-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <input
            type="text"
            placeholder="Link to Github"
            value={linkGithub}
            onChange={(e) => setLinkGithub(e.target.value)}
            className="p-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 max-h-10"
          />
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="currentlyWorking" className="text-white text-lg">
              Currently working
            </label>
            <input
              type="checkbox"
              id="currentlyWorking"
              checked={currentlyWorking}
              onChange={(e) => setCurrentlyWorking(e.target.checked)}
              className="p-2 w-6 h-6 bg-white rounded-md outline-none focus:ring-2 focus:ring-code-bg-light"
            />
          </div>
        </div>

        {/* show advanced options*/}
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-5"
          onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
        >
          {showAdvancedOptions
            ? "Hide advanced options"
            : "Show advanced options"}
        </button>

        {/* nullable options */}
        {showAdvancedOptions && (
          <div className="grid grid-cols-2 gap-6 p-4">
            <input
              type="text"
              placeholder="Another link"
              value={anotherLink}
              onChange={(e) => setAnotherLink(e.target.value)}
              className="p-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value.split(","))}
              className="p-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Languages used"
              value={languagesUsed}
              onChange={(e) => setLanguagesUsed(e.target.value.split(","))}
              className="p-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Collaborators"
              value={collaborators}
              onChange={(e) => setCollaborators(e.target.value.split(","))}
              className="p-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Initial date"
              value={initialDate}
              onChange={(e) => setInitialDate(e.target.value)}
              className="p-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Final date"
              value={finalDate}
              onChange={(e) => setFinalDate(e.target.value)}
              className="p-2 bg-white rounded-md outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        )}

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Create blog
        </button>
      </div>
    </div>
  );
}
