import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const CardService = ({
  title, description, link, icon,
}) => (
  <div className="card border-0 shadow-sm rounded-4 h-100">
    <div className="card-body">
      {icon}
      <h5 className="card-title my-3">{title}</h5>
      <p className="text-muted">{description}</p>
    </div>
    <div className="card-footer bg-white border-0 py-0" style={{ borderBottomLeftRadius: '15px', WebkitBorderBottomRightRadius: '15px' }}>
      {link && (
        <Link className="link link-dark my-3 float-end" href={link} target="_blank" rel="noopener noreferrer">Selengkapnya <FaArrowRight /></Link>
      )}
    </div>
  </div>
);

export default CardService;
