const Shipping = () => {
  return (
    <section className="mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Shipping policy</h1>

      <div className="text-gray-700 text-lg leading-relaxed text-left md:text-center">
        <p>MIYOKO offers standard &amp; same day shipping :</p>
        <div className="flex justify-center ml-20">
        <ul className="text-left list-disc space-y-4 my-5 inset-0 w-[30%] mx-auto">
          <li className="text-sm">
            <span>Standard Shipping</span> takes from 1-4
            working days.
          </li>
          <li className="text-sm">
            <span className="font-medium">Same day shipping</span> requires full
            payment before shipping, it takes 30–60 mins to deliver after
            transaction is done.
          </li>
          <li className="text-sm">
            In both cases, you will receive a confirmation call before
            proceeding your order.
          </li>
        </ul>
        </div>
      </div>

    </section>
  );
};

export default Shipping;
