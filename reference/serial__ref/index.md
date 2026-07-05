---
title: Serial Interfaces
draft: true
---


## Flash Cards

Front                                   | Back
--------------------------------------- | ------------------------------------------------
I2C diagram                             | I2C  - Inter-Integrated Circuit (I²C)
SPI diagram                             | SPI - Serial Peripheral Interface
UART diagram                            | UART - Universal Asynchronous Receiver/Transmitter
SPI devices  - device roles             | One controller, one or more peripherals
I2C devices  - device roles             | One or more controllers, one or more peripherals
UART devices - device roles             | Two devices, no controllers or peripherals
I2C signals                             | SDA = Serial Data, SCL = Serial Clock Line
SPI signals                             | SCLK = Serial Clock; COPI = Controller Out, Peripheral In; CIPO = Controller In, Peripheral Out; CS = Chip Select
UART signals                            | TX = Transmit; RX = Receive; GND = Common ground between devices
Device selection: I2C, SPI, UART        | Address, Chip Select, None
Asynchronous                            | Does not use a shared clock signal between transmitter and receiver. Instead, timing is coordinated using an agreed baud rate so the receiver samples bits at the correct intervals.
Full duplex                             | Controller and peripheral can send data simultaneously
Half duplex                             | A device can transmit and receive, but not at the same time
Duplex model: I2C, SPI, UART            | Half duplex, full duplex, full duplex
I2C vs SPI - Speed                      | SPI is faster

UART
Packets

- Start bit
- Data frame
- Parity bit - used as an error check mechanism
- Stop bits

## I2C ("I Squared C")
