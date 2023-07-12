import { Provider } from "react-redux";
import Main from "./Main";
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

const stripeKey =
  "pk_test_51N9yxuC5tRyWdj0ju67zdpqdk7xwM2SQ05i9p2MtTRZrXgHJEMiFhm3SIXCNkJjeteP9jBmKXX2URIsXU9Yfai42004slFtWxe";
export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="6-pack-ecom.com"
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
}
