import Link from "next/link";

const links = [
  {
    id: 1,
    icon: "uil uil-facebook-f",
    url: "https://www.facebook.com/share/1AHRDfFEe8/",
  },
  {
    id: 2,
    icon: "uil uil-instagram",
    url: "https://www.instagram.com/poshak_tattva?igshid=1gcwnpf94lpyf",
  },
  {
    id: 3,
    icon: "uil uil-whatsapp",
    url: "https://api.whatsapp.com/send?phone=9351500400",
  },
  {
    id: 4,
    icon: "uil uil-linkedin",
    url: "https://in.linkedin.com/in/priyanka-pugalia-18b4b5169/",
  },
];

const SocialLinks = ({ className = "nav social  mt-4" }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <Link href={url} key={id} target="_blank" rel="noreferrer">
          <i className={`${icon} fs-30 bg-white rounded`} />
        </Link>
      ))}
    </nav>
  );
};

export default SocialLinks;
