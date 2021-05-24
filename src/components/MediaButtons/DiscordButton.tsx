import { MediaButton } from "./components/MediaButton";
import { FaDiscord } from "react-icons/fa";
import { urls } from "urls";

export const DiscordButton = () => {
  return (
    <MediaButton name="discord" href={urls.discord} icon={<FaDiscord />} />
  );
};