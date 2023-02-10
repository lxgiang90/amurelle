import React from 'react';
import PropTypes from 'prop-types';

Currency.propTypes = {
    
};

function Currency(props) {
    return (
        <ul class="HorizontalList HorizontalList--spacingLoose hidden-pocket hidden-lap">
            <li class="HorizontalList__Item">
                <form method="post" action="/localization" id="localization_form_header" accept-charset="UTF-8" class="Header__LocalizationForm hidden-pocket hidden-lap" enctype="multipart/form-data">
                    <input type="hidden" name="currency_code" value="EUR" />
                    <span class="u-visually-hidden">Currency</span>

                    <button type="button" class="SelectButton Link Link--primary u-h8" aria-haspopup="true" aria-expanded="false" aria-controls="header-currency-popover-0">EUR€
                        <svg class="Icon Icon--select-arrow" role="presentation" viewBox="0 0 19 12">
                            <polyline fill="none" stroke="currentColor" points="17 2 9.5 10 2 2" fill-rule="evenodd" stroke-width="2" stroke-linecap="square"></polyline>
                        </svg>
                    </button>

                    <div id="header-currency-popover-0" class="Popover Popover--small Popover--noWrap" aria-hidden="true">
                        <header class="Popover__Header">
                            <button type="button" class="Popover__Close Icon-Wrapper--clickable" data-action="close-popover">
                                <svg class="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
                                    <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>
                                </svg>
                            </button>
                            <span class="Popover__Title Heading u-h4">Currency</span>
                        </header>

                        <div class="Popover__Content">
                            <div class="Popover__ValueList Popover__ValueList--center" data-scrollable="">
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="AED">
                                    AED د.إ
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="AFN">
                                    AFN ؋
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="ALL">
                                    ALL L
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="AMD">
                                    AMD դր.
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="ANG">
                                    ANG ƒ
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="AUD">
                                    AUD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="AWG">
                                    AWG ƒ
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="AZN">
                                    AZN ₼
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="BAM">
                                    BAM КМ
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="BBD">
                                    BBD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="BDT">
                                    BDT ৳
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="BGN">
                                    BGN лв.
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="BIF">
                                    BIF Fr
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="BND">
                                    BND $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="BOB">
                                    BOB Bs.
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="BSD">
                                    BSD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="BWP">
                                    BWP P
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="BZD">
                                    BZD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="CAD">
                                    CAD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="CDF">
                                    CDF Fr
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="CHF">
                                    CHF CHF
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="CNY">
                                    CNY ¥
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="CRC">
                                    CRC ₡
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="CVE">
                                    CVE $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="CZK">
                                    CZK Kč
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="DJF">
                                    DJF Fdj
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="DKK">
                                    DKK kr.
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="DOP">
                                    DOP $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="DZD">
                                    DZD د.ج
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="EGP">
                                    EGP ج.م
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="ETB">
                                    ETB Br
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value is-selected Heading Link Link--primary u-h6" value="EUR" aria-current="true">
                                    EUR €
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="FJD">
                                    FJD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="FKP">
                                    FKP £
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="GBP">
                                    GBP £
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="GMD">
                                    GMD D
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="GNF">
                                    GNF Fr
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="GTQ">
                                    GTQ Q
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="GYD">
                                    GYD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="HKD">
                                    HKD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="HNL">
                                    HNL L
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="HUF">
                                    HUF Ft
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="IDR">
                                    IDR Rp
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="ILS">
                                    ILS ₪
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="INR">
                                    INR ₹
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="ISK">
                                    ISK kr
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="JMD">
                                    JMD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="JPY">
                                    JPY ¥
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="KES">
                                    KES KSh
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="KGS">
                                    KGS som
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="KHR">
                                    KHR ៛
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="KMF">
                                    KMF Fr
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="KRW">
                                    KRW ₩
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="KYD">
                                    KYD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="KZT">
                                    KZT 〒
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="LAK">
                                    LAK ₭
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="LBP">
                                    LBP ل.ل
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="LKR">
                                    LKR ₨
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="MAD">
                                    MAD د.م.
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="MDL">
                                    MDL L
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="MKD">
                                    MKD ден
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="MMK">
                                    MMK K
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="MNT">
                                    MNT ₮
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="MOP">
                                    MOP P
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="MUR">
                                    MUR ₨
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="MVR">
                                    MVR MVR
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="MWK">
                                    MWK MK
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="MYR">
                                    MYR RM
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="NGN">
                                    NGN ₦
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="NIO">
                                    NIO C$
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="NPR">
                                    NPR ₨
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="NZD">
                                    NZD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="PEN">
                                    PEN S/.
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="PGK">
                                    PGK K
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="PHP">
                                    PHP ₱
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="PKR">
                                    PKR ₨
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="PLN">
                                    PLN zł
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="PYG">
                                    PYG ₲
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="QAR">
                                    QAR ر.ق
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="RON">
                                    RON Lei
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="RSD">
                                    RSD РСД
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="RWF">
                                    RWF FRw
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="SAR">
                                    SAR ر.س
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="SBD">
                                    SBD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="SEK">
                                    SEK kr
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="SGD">
                                    SGD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="SHP">
                                    SHP £
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="SLL">
                                    SLL Le
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="STD">
                                    STD Db
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="THB">
                                    THB ฿
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="TJS">
                                    TJS ЅМ
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="TOP">
                                    TOP T$
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="TTD">
                                    TTD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="TWD">
                                    TWD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="TZS">
                                    TZS Sh
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="UAH">
                                    UAH ₴
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="UGX">
                                    UGX USh
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="USD">
                                    USD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="UYU">
                                    UYU $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="UZS">
                                    UZS
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="VND">
                                    VND ₫
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="VUV">
                                    VUV Vt
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="WST">
                                    WST T
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="XAF">
                                    XAF Fr
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="XCD">
                                    XCD $
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="XOF">
                                    XOF Fr
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="XPF">
                                    XPF Fr
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="YER">
                                    YER ﷼
                                </button>
                                <button type="submit" name="currency_code" class="Popover__Value Heading Link Link--primary u-h6" value="ZAR">
                                    ZAR R
                                </button>
                            </div>
                        </div>

                    </div>
                </form>
            </li>
        </ul>
    );
}

export default Currency;