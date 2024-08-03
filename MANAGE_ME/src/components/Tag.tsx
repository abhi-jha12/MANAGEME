
import {
  DesignTagImage,
  GroceryTagImage,
  HealthTagImage,
  HomeTagImage,
  MovieTagImage,
  MusicTagImage,
  SocialTagImage,
  SportTagImage,
  UniversityTagImage,
  WorkTagImage
} from "../assets";

interface TagProps {
  tags: Array<string>;
}

const tagToImageMapping = (tag: string) => {
  switch (tag) {
    case "groceries":
      return GroceryTagImage;
    case "design":
      return DesignTagImage;
    case "health":
      return HealthTagImage;
    case "home":
      return HomeTagImage;
    case "movie":
      return MovieTagImage;
    case "music":
      return MusicTagImage;
    case "social":
      return SocialTagImage;
    case "work":
      return WorkTagImage;
    case "university":
      return UniversityTagImage;
    case "sports":
      return SportTagImage;
    default:
      return HomeTagImage;
  }
};

const Tag = ({ tags }: TagProps) => {
  console.log(tags);
  return (
    <div className="flex flex-row ">
      {tags.map((tag, index) => (
        <div key={index} style={{ textAlign: 'center', margin: '10px' }} className=" flex flex-col w-10 h-10 items-center justify-center">
          <img src={tagToImageMapping(tag)} alt={tag} />
          <p className="text-white capitalize text-xs tracking-wide">{tag}</p>
        </div>
      ))}
    </div>
  );
};

export default Tag;
