import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialNetworks } from "@/data/socialNetworks";

function SocialNetworkMenu() {
  return (
    <nav className="w-100" aria-label="Social networks">
      <ul className="buttons my-4 mx-2 is-flex is-justify-content-center is-flex-wrap-wrap is-gap-2">
        {socialNetworks.map((socialNetwork) => {
          const opensNewTab = socialNetwork.type !== "email";

          return (
            <li key={socialNetwork.name} className="is-full-width-mobile">
              <a
                className="button is-large is-rounded is-warning is-outlined social-link is-flex is-justify-content-center is-align-items-center min-width-200px w-100"
                href={socialNetwork.url}
                {...(opensNewTab && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {socialNetwork.icon && (
                  <span className="icon mr-1 is-flex is-justify-content-center is-align-items-center">
                    <FontAwesomeIcon icon={socialNetwork.icon} />
                  </span>
                )}
                {socialNetwork.name}
                {opensNewTab && (
                  <span className="is-sr-only"> (opens in a new tab)</span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SocialNetworkMenu;
