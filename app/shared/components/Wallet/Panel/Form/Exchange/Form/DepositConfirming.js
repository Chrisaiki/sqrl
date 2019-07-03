// @flow
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Decimal } from 'decimal.js';

import { Button, Header, Divider, Icon, Segment, Message } from 'semantic-ui-react';

class WalletPanelFormExchangeDepositConfirming extends Component<Props> {
  onConfirm = () => {
    const {
      onConfirm
    } = this.props;

    onConfirm();
  }

  render() {
    const {
      decimalDepositAmount,
      EOSbalance,
      onBack,
      settings,
      t
    } = this.props;

    const depositAmount = decimalDepositAmount.toNumber();
    const balanceDifference =  Decimal(EOSbalance).toNumber() - depositAmount;

    return (
        <Segment padding="true" basic>
          <Segment.Group>
            <Segment>
              <Header textAlign="center">
                <font color="green">
                  <Icon name="microchip" />{t('rex_deposit_about_to', 
                    {depositAmount: depositAmount.toFixed(4), tokenSymbol: settings.blockchain.tokenSymbol})}
                </font>
                <Header.Subheader>
                  ({t('rex_you_will_have')} {balanceDifference.toFixed(4)} {t('rex_balance_after', {tokenSymbol:settings.blockchain.tokenSymbol})})
                </Header.Subheader>
              </Header>
            </Segment>
          </Segment.Group>

          <Divider />
          <Button
            onClick={onBack}
          >
            <Icon name="arrow left" /> {t('back')}
          </Button>
          <Button
            color="blue"
            floated="right"
            onClick={this.onConfirm}
          >
            <Icon name="check" /> {t('rex_confirm_button')}
          </Button>
        </Segment>
    );
  }
}

export default translate('exchange')(WalletPanelFormExchangeDepositConfirming);