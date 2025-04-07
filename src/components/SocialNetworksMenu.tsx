import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { socialNetworks } from '@/data/socialNetworks';

function SocialNetworkMenu() {
  return (
    <div className="w-100">
      <div className="buttons my-4 mx-2 is-flex is-justify-content-center is-flex-wrap-wrap is-gap-2">
        {socialNetworks.map((socialNetwork) => (
          <a
            key={socialNetwork.name}
            className="button is-large is-rounded is-flex is-justify-content-center is-align-items-center min-width-200px is-full-width-mobile"
            href={socialNetwork.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon mr-1 is-flex is-justify-content-center is-align-items-center">
              <FontAwesomeIcon icon={socialNetwork.icon} />
            </span>
            {socialNetwork.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialNetworkMenu;