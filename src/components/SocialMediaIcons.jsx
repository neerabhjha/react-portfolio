import linkedInLogo from "../assets/linkedin.png";
import instagramLogo from "../assets/instagram.png";
import githubLogo from "../assets/githubLogo.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com/in/neerabh-n-971648205/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedInLogo} alt="linkedin-link" />
      </a>

      <a
        href="https://github.com/neerabhjha"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={githubLogo}
          alt="github-link"
          className="w-9 h-9 rounded-full"
        />
      </a>
      <a
        href="https://www.instagram.com/thenameisneerabh/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramLogo} alt="instagram-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
