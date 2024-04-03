import Link from "next/link";
function SocialIcons() {
  return (
    <div className="social-icons-container">
      <div className="social-icon">
        <Link href="https://twitter.com/JhonIdrovo_D" legacyBehavior>
          <a target="_blank">
            <i className="fab fa-twitter-square"></i>
          </a>
        </Link>
      </div>
      <div className="social-icon">
        <Link href="https://github.com/Jhon-Idrovo" legacyBehavior>
          <a target="_blank">
            <i class="fab fa-github-square"></i>
          </a>
        </Link>
      </div>
      <div className="social-icon">
        <Link
          href="https://www.linkedin.com/in/hire-jhon-idrovo/"
          legacyBehavior
        >
          <a target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </Link>
      </div>
      <div className="social-icon">
        <Link href="mailto:jhon.idrovo.applications@gmail.com" legacyBehavior>
          <a>
            <i className="fas fa-envelope-square"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SocialIcons;
