import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";

export default function CheckoutPage() {
  return (
    <div className="bg-li-gray">
      <div className="max-w-[1174px] mx-auto px-8">
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </div>
  );
}
