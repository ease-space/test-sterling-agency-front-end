import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as actionsForm } from 'react-redux-form';

import Subscribe from '../../../../components/AppWrapper/Footer/Subscribe/index';

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...actionsForm,
      },
      dispatch,
    ),
  };
};

const mapStateToProps = state => {
  return {
    formSubscribe: state.forms.forms.subscribe.email,
  };
};

@compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
class SubscribeContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    formSubscribe: PropTypes.object,
  };

  handleClickAgreement = () => {};

  handleSubmitForm = dataForm => {
    console.log(dataForm);
  };

  render() {
    const {
      className,
      formSubscribe: { touched, valid },
    } = this.props;

    return (
      <Subscribe
        touched={touched}
        valid={valid}
        onSubmitForm={this.handleSubmitForm}
        onClickAgreement={this.handleClickAgreement}
        className={className}
      />
    );
  }
}

export default SubscribeContainer;
