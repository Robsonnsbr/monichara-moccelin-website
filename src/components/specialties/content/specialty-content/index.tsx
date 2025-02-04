function SpecialtyContent({ services }: { services: any[] }) {
  return (
    <ul className="list-none space-y-4">
      {services.map((service, index) => (
        <li key={index} className="mb-4">
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default SpecialtyContent;
