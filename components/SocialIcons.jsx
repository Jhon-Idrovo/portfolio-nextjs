import Link from "next/link";
function SocialIcons() {
  return (
    <div className="social-icons-container">
      <div className="social-icon">
        <Link href="https://twitter.com/JhonIdrovo_D">
          <a target="_blank">
            <i class="fab fa-twitter-square"></i>
          </a>
        </Link>
      </div>
      <div className="social-icon">
        <Link href="https://twitter.com/JhonIdrovo_D">
          <a target="_blank">
            <i class="fab fa-github-square"></i>
          </a>
        </Link>
      </div>
      <div className="social-icon">
        <Link href="mailto:jhonidrovo3@gmail.com">
          <a>
            <i class="fas fa-envelope-square"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SocialIcons;
