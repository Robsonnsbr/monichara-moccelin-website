function SpecialtyContent({ services }: { services: any[] }) {
  return (
    <ul className="list-none space-y-4 lg:w-4/5">
      {services.map((service, index) => (
        <li
          key={index}
          className="p-2 sm:p-6 bg-gradient-to-r  from-extraLightBlueGray to-lightBlueGray rounded-md space-x-4 text-deepIndigoBlue"
        >
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-md">{service.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default SpecialtyContent;
