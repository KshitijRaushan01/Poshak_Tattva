import Image from 'next/image';
import NextLink from './NextLink';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, src, description }) => {
 return (
 <div className="col-md-6 col-lg-4 d-flex">
 <div className="card h-100 shadow-sm border-0 d-flex flex-column text-center w-100">
 <div className="card-body p-5 d-flex flex-column h-100">
 <div className="flex-grow-1">
 <Image
 src={src}
 alt={`${title} | Poshak Tattva`}
 width={100}
 height={100}
 className="mx-auto mb-4"
 style={{ objectFit: 'contain' }}
 unoptimized={true}
 />
 <h3 className="service-card-title fw-bold mb-3">{title}</h3>
 <p className="service-card-item mb-5">{description}</p>
 </div>
 <div className="mt-auto">
 <NextLink
 title="Learn More"
 href="#"
 className="btn btn-primary d-inline-block px-5 rounded-pill service-card-link"
 style={{ background: '#2e7d32', borderColor: '#2e7d32', fontWeight: '500' }}
 />
 </div>
 </div>
 </div>
 </div>
 );
};

ServiceCard.propTypes = {
 title: PropTypes.string,
 src: PropTypes.string,
 description: PropTypes.string,
};

ServiceCard.defaultProps = {
 title: 'Untitled Service',
 src: '/img/default-service.png',
 description: 'No description available.',
};

export default ServiceCard;
