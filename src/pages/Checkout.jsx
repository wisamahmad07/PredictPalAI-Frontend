import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import countryList from "react-select-country-list";
import classNames from "classnames";
import { City } from "country-state-city";
import { PatternFormat } from "react-number-format";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import CustomSelect from "@ui/CustomSelect";
import { useShopProvider } from "@contexts/shopContext";

import { GoSell } from "@tap-payments/gosell";

import paymentBg from "@assets/team_stats.webp";
import { useCreateOrderMutation } from "@api/eCommerce/eCommerceApi";
import { useSelector } from "react-redux";

const schema = yup.object().shape({
  UserName: yup.string().required("Your Name is required"),
  UserEmail: yup
    .string()
    .email("Invalid email format")
    .required("Your Email is required"),
  Country: yup.mixed().required("Country is required"),
  City: yup.mixed().required("City is required"),
  Phone: yup.string().required("Phone Number is required"),
  Address: yup.string().required("Address is required"),
  Company: yup.string(),
  VATNumber: yup.string(),
  PromotionalCode: yup.string(),
});

const SHIPPING_FEE = {
  DHL: 15,
  FedEx: 0,
  Express: 49,
};

const Checkout = () => {
  const userId = useSelector((state) => state.user?.user?.uid);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    control,
  } = useForm({
    defaultValues: {
      UserName: "",
      UserEmail: "",
      Country: "",
      City: "",
      Phone: "",
      Address: "",
      Company: "",
      VATNumber: "",
      PromotionalCode: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const userName = watch("UserName");
  const userEmail = watch("UserEmail");
  const country = watch("Country");
  const city = watch("City");
  const phone = watch("Phone");
  const address = watch("Address");
  const company = watch("Company");
  const vatNumber = watch("VATNumber");
  const promotionalCode = watch("PromotionalCode");

  const [, setSelectedCountry] = useState();
  const [, setSelectedCity] = useState();
  const [cities, setCities] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [paymentOption, setPaymentOption] = useState("Tap");
  const [shippingOption, setShippingOption] = useState("DHL");
  const [, setOrder] = useState(null);

  const { cart } = useShopProvider();

  const [createOrder] = useCreateOrderMutation();

  const getCountriesOptions = () => {
    let countries = countryList().getData();
    return countries;
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedCity(null);
    let options = [];
    const rawData = City.getCitiesOfCountry(country.value);
    rawData.map((item) => options.push({ value: item.name, label: item.name }));
    setCities(options);
  };

  const onSubmit = async (data) => {
    const response = await createOrder({
      CustomerID: userId,
      Name: userName,
      Description: "Order to buy products",
      Amount:
        subtotal * ((vatNumber ? 1.15 : 1) - discount) +
        SHIPPING_FEE[shippingOption],
      Currency: "USD",
      Items: cart.map((item) => ({
        id: item.ProductID,
        name: item.Name,
        description: item.Description,
        quantity: `x${item.amount}`,
        amount_per_unit: `USD${item.Price.toFixed(3)}`,
        discount: {
          type: "P",
          value: "0%",
        },
        total_amount: `USD${(item.Price * item.amount).toFixed(3)}`,
      })),
      Shipping: shippingOption
        ? {
            amount: SHIPPING_FEE[shippingOption],
            currency: "USD",
            description: "This is shipping service.",
            provider: shippingOption,
            service: "This is shipping service.",
          }
        : null,
      Taxes: vatNumber
        ? [
            {
              description: "Sales Taxe",
              name: "VAT",
              rate: {
                type: "P",
                value: "15%",
              },
            },
          ]
        : null,
      Status: "created",
      ShippingAddress: {
        City: city,
        Country: country,
        Address: address,
        Company: company,
      },
      BillingAddress: {
        City: city,
        Country: country,
        Address: address,
        Company: company,
      },
    });

    if (response.data) {
      setOrder(response.data);

      switch (paymentOption) {
        case "Tap":
          GoSell.openLightBox();
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    setSubtotal(
      cart.reduce((total, item) => total + item.Price * item.amount, 0)
    );
  }, [cart]);

  return (
    <section className="bg-widget py-8 antialiased dark:bg-gray-900 md:py-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-screen-xl px-4 2xl:px-0"
      >
        <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
          <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Cart
            </span>
          </li>

          <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Checkout
            </span>
          </li>

          <li className="flex shrink-0 items-center">
            <svg
              className="me-2 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Order summary
          </li>
        </ol>

        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Delivery Details
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="your_name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Your name{" "}
                  </label>
                  <input
                    className={classNames("field", {
                      "field--error": errors.UserName,
                    })}
                    type="text"
                    placeholder="Your Name"
                    {...register("UserName")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="your_email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Your email*{" "}
                  </label>
                  <input
                    className={classNames("field", {
                      "field--error": errors.UserEmail,
                    })}
                    type="text"
                    placeholder="Your Email"
                    {...register("UserEmail")}
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="select-country-input-3"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Country*{" "}
                    </label>
                  </div>
                  <Controller
                    name="Country"
                    control={control}
                    render={({ field }) => {
                      return (
                        <CustomSelect
                          options={getCountriesOptions()}
                          value={field.value}
                          onChange={(value) => {
                            field.onChange(value);
                            handleCountryChange(value);
                          }}
                          placeholder="Country"
                          isSearchable={true}
                          variant="basic"
                          innerRef={field.ref}
                        />
                      );
                    }}
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="select-city-input-3"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      City*{" "}
                    </label>
                  </div>
                  <Controller
                    name="City"
                    control={control}
                    render={({ field }) => {
                      return (
                        <CustomSelect
                          options={cities}
                          value={field.value}
                          onChange={(value) => {
                            field.onChange(value);
                            setSelectedCity(value);
                          }}
                          placeholder="City"
                          isSearchable={true}
                          variant="basic"
                          innerRef={field.ref}
                        />
                      );
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone-input-3"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Phone Number*{" "}
                  </label>
                  <div className="flex items-center">
                    <Controller
                      name="Phone"
                      control={control}
                      render={({ field }) => (
                        <PatternFormat
                          className={classNames("field", {
                            "field--error": errors.Phone,
                          })}
                          placeholder="Phone"
                          format="+1 (###) ###-####"
                          mask="_"
                          getInputRef={field.ref}
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Address{" "}
                  </label>
                  <input
                    className={classNames("field", {
                      "field--error": errors.Address,
                    })}
                    type="text"
                    placeholder="Address"
                    {...register("Address")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company_name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Company name{" "}
                  </label>
                  <input
                    className={classNames("field", {
                      "field--error": errors.Company,
                    })}
                    type="text"
                    placeholder="Company"
                    {...register("Company")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="vat_number"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    VAT number{" "}
                  </label>
                  <input
                    className={classNames("field", {
                      "field--error": errors.VATNumber,
                    })}
                    type="text"
                    placeholder="VAT Number"
                    {...register("VATNumber")}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Payment
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="pay-on-delivery"
                        aria-describedby="pay-on-delivery-text"
                        type="radio"
                        name="payment-method"
                        value="Tap"
                        onClick={() => setPaymentOption("Tap")}
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        checked={paymentOption === "Tap"}
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="pay-on-delivery"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        {" "}
                        Pay with Tap{" "}
                      </label>
                      <p
                        id="pay-on-delivery-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Pay with your credit card
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="credit-card"
                        aria-describedby="credit-card-text"
                        type="radio"
                        name="payment-method"
                        value="Stripe"
                        onClick={() => setPaymentOption("Stripe")}
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        checked={paymentOption === "Stripe"}
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="credit-card"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        {" "}
                        Pay with Stripe{" "}
                      </label>
                      <p
                        id="credit-card-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Pay with your credit card
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="paypal-2"
                        aria-describedby="paypal-text"
                        type="radio"
                        name="payment-method"
                        value="Paypal"
                        onClick={() => setPaymentOption("Paypal")}
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        checked={paymentOption === "Paypal"}
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="paypal-2"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        {" "}
                        Paypal account{" "}
                      </label>
                      <p
                        id="paypal-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Connect to your account
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Delivery Methods
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="dhl"
                        aria-describedby="dhl-text"
                        type="radio"
                        name="delivery-method"
                        value="DHL"
                        onClick={() => setShippingOption("DHL")}
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        checked={shippingOption === "DHL"}
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="dhl"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        {" "}
                        $15 - DHL Fast Delivery{" "}
                      </label>
                      <p
                        id="dhl-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Get it by Tommorow
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="fedex"
                        aria-describedby="fedex-text"
                        type="radio"
                        name="delivery-method"
                        value="FedEx"
                        onClick={() => setShippingOption("FedEx")}
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        checked={shippingOption === "FedEx"}
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="fedex"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        {" "}
                        Free Delivery - FedEx{" "}
                      </label>
                      <p
                        id="fedex-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Get it by Friday, 13 Dec 2023
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="express"
                        aria-describedby="express-text"
                        type="radio"
                        name="delivery-method"
                        value="Express"
                        onClick={() => setShippingOption("Express")}
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        checked={shippingOption === "Express"}
                      />
                    </div>

                    <div className="ms-4 text-sm">
                      <label
                        htmlFor="express"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                      >
                        {" "}
                        $49 - Express Delivery{" "}
                      </label>
                      <p
                        id="express-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      >
                        Get it today
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="voucher"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {" "}
                Enter a gift card, voucher or promotional code{" "}
              </label>
              <div className="flex max-w-md items-center gap-4">
                <input
                  className={classNames("field", {
                    "field--error": errors.PromotionalCode,
                  })}
                  type="text"
                  placeholder="Promotional Code"
                  {...register("PromotionalCode")}
                />
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    if (promotionalCode && promotionalCode.length > 0) {
                      setDiscount(0.1);
                    }
                  }}
                  disabled={!promotionalCode}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
            <div className="flow-root">
              <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Subtotal
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    ${subtotal.toFixed(2)}
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Savings
                  </dt>
                  <dd className="text-base font-medium text-green-500">
                    ${(subtotal * discount).toFixed(2)}
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Shipping
                  </dt>
                  <dd className="text-base font-medium text-green-500">
                    ${SHIPPING_FEE[shippingOption]}
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Store Pickup
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    ${(subtotal * 0.1).toFixed(2)}
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Tax
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    ${(subtotal * (vatNumber ? 0.15 : 0)).toFixed(2)}
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    $
                    {(
                      subtotal * ((vatNumber ? 1.15 : 1) - discount) +
                      SHIPPING_FEE[shippingOption]
                    ).toFixed(2)}
                  </dd>
                </dl>
              </div>
            </div>

            <div className="space-y-3">
              <button type="submit" className="btn w-full" disabled={!isValid}>
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </form>
      <GoSell
        gateway={{
          publicKey: "pk_test_el1KfLDYONdjZ9w5H2X4ta6m",
          language: "en",
          contactInfo: true,
          supportedCurrencies: "all",
          supportedPaymentMethods: "all",
          saveCardOption: true,
          customerCards: true,
          notifications: "standard",
          backgroundImg: {
            url: paymentBg,
            opacity: "0.5",
          },
          callback: (response) => {
            console.log(response);
          },
          labels: {
            cardNumber: "Card Number",
            expirationDate: "MM/YY",
            cvv: "CVV",
            cardHolder: "Name on Card",
            actionButton: "Pay",
          },
          style: {
            base: {
              color: "#535353",
              lineHeight: "18px",
              fontFamily: "sans-serif",
              fontSmoothing: "antialiased",
              fontSize: "16px",
              "::placeholder": {
                color: "rgba(0, 0, 0, 0.26)",
                fontSize: "15px",
              },
            },
            invalid: {
              color: "red",
              iconColor: "#fa755a ",
            },
          },
        }}
        customer={{
          first_name: userName ? userName.split(" ")[0] : "",
          middle_name:
            userName && userName.split(" ").length > 2
              ? userName.split(" ").slice(1, -1).join(" ")
              : "",
          last_name:
            userName && userName.split(" ").length > 1
              ? userName.split(" ").at(-1)
              : "",
          email: userEmail,
          phone: {
            country_code: "1",
            number: phone,
          },
        }}
        order={{
          amount:
            subtotal * ((vatNumber ? 1.15 : 1) - discount) +
            SHIPPING_FEE[shippingOption],
          currency: "USD",
          items: cart.map((item) => ({
            id: item.ProductID,
            name: item.Name,
            description: item.Description,
            quantity: `x${item.amount}`,
            amount_per_unit: `USD${item.Price.toFixed(3)}`,
            discount: {
              type: "P",
              value: "0%",
            },
            total_amount: `USD${(item.Price * item.amount).toFixed(3)}`,
          })),
          shipping: shippingOption
            ? {
                amount: SHIPPING_FEE[shippingOption],
                currency: "USD",
                description: "test",
                provider: shippingOption,
                service: "test",
              }
            : null,
          taxes: vatNumber
            ? [
                {
                  description: "test",
                  name: "VAT",
                  rate: {
                    type: "P",
                    value: "15%",
                  },
                },
              ]
            : null,
        }}
        transaction={{
          mode: "charge",
          charge: {
            saveCard: false,
            threeDSecure: true,
            description: "Test Description",
            statement_descriptor: "Sample",
            reference: {
              transaction: "txn_0001",
              order: "ord_0001",
            },
            metadata: {},
            receipt: {
              email: false,
              sms: true,
            },
            redirect: `${process.env.REACT_APP_BACKEND_URL}/ecommerce/orders/update/1}`,
            post: null,
          },
        }}
      />
    </section>
  );
};

export default Checkout;
