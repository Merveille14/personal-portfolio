import projImg4 from "../assets/img/project-img5.jpg";
export const ProjectCard = ({ title, description, imgUrl }) => {
    const isFourthProject = imgUrl === projImg4;
    return (
      <div className="w-full p-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800">
          <img 
            src={imgUrl} 
            alt={title} 
            className={`w-full object-cover rounded-t-lg ${
                isFourthProject ? "h-65" : "h-64"
              }`}
          />
          <div className="p-4">
            <h4 className="text-white text-xl font-bold mb-2">{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>
      </div>
    )
  }
  