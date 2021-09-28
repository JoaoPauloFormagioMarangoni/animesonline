import React from "react";
import ReactDOM from "react-dom"
import { PayPalButtonProps } from "react-paypal-button-v2";

declare const window: any;

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export function PayPalComponent() {
    function createOrder(data: any, actions: any) {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "5.00",
                    },
                },
            ],
        });
    }

    const onApprove = (data: any, actions: any) => {
        return actions.order.capture();
    };

    return (
        <div>,
            <PayPalButton
                createOrder={(data: PayPalButtonProps, actions: PayPalButtonProps) => createOrder(data, actions)}
                onApprove={(data: PayPalButtonProps, actions: PayPalButtonProps) => onApprove(data, actions)}
            />
        </div>
    );
}