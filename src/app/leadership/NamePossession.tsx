const NamePossession = ({
  name,
  possession,
}: {
  name: string;
  possession: string;
}) => {
  return (
    <div className="my-2">
      <h3 className="text-center text-xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-2xl md:leading-tight">{name}</h3>
      <h5 className="text-center text-base font-medium italic text-body-color">{possession}</h5>
    </div>
  )
}

export default NamePossession;