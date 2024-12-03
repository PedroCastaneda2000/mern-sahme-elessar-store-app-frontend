import { Link, useNavigate } from "react-router-dom";

type Props = {
  toLink: string;
};

const RefreshButton = ({ toLink }: Props) => {
  const navigate = useNavigate();

  const handleReload = (url: string) => {
    if (window.location.pathname === url) {
      window.location.reload();
    } else {
      navigate(url);
      window.location.reload();
    }
  };
  return (
    <Link
      onClick={() => handleReload(`${toLink}`)}
      className="text-16sm font-light font-inter hover:underline hover:underline-offset-4"
      to={toLink}
    >
      Reset
    </Link>
  );
};

export default RefreshButton;
