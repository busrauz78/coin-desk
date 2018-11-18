import React, { Component } from "react";
import List from "../list/List";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import _ from "lodash";
import { fetchCurrency } from "../../store/action/currency";
class Home extends Component {

  componentDidMount() {
    this.props.fetchCurrency();
  }
  
  render() {
    const { rates, loading } = this.props;
    if (!loading) {
      return <Spinner />;
    } else {
      return (
        <div className="container">
          <List rates={rates} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  const rates = _.map(state.CurrencyResponse.currency.rates, (price, base) => {
    return { base, price };
  });
  return {
    date: state.CurrencyResponse.currency.date,
    base: state.CurrencyResponse.currency.base,
    rates: rates,
    loading: state.CurrencyResponse.loading
  };
};
export default connect(
  mapStateToProps,
  { fetchCurrency }
)(Home);
