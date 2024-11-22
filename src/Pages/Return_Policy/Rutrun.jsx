const Rutrun = () => {
  return (
    <div className="container mx-auto p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
        Return Policy
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        At <strong>Gadget Haven</strong>, we strive to provide high-quality
        gadget products. If, for any reason, you are not satisfied with your
        purchase, we are here to help.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Returns</h2>
        <p className="text-gray-600 mb-4">
          You have <strong>30 calendar days</strong> to return an item from the
          date you received it. To be eligible for a return:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            The item must be unused and in the same condition that you received
            it.
          </li>
          <li>It must be in the original packaging.</li>
          <li>You must provide proof of purchase.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refunds</h2>
        <p className="text-gray-600">
          Once we receive your returned item, we will inspect it and notify you
          of the status of your refund. If approved, we will process the refund
          to your original method of payment within 7-10 business days.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping</h2>
        <p className="text-gray-600 mb-4">
          You will be responsible for paying for your own shipping costs for
          returning your item. Shipping costs are non-refundable. If you receive
          a refund, the cost of return shipping will be deducted from your
          refund.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Exceptions
        </h2>
        <p className="text-gray-600 mb-4">
          Some items are non-returnable, including:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Customized or personalized stone products</li>
          <li>Items on clearance sale</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions about our return policy, feel free to
          contact us at{" "}
          <a
            href="mailto:support@ruzainapvtltd.com"
            className="text-blue-500 underline"
          >
            support@gadgethaven.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Rutrun;
