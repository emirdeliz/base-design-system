export const filterDOMProps = (props: any, excludeProps: string[] = []) => {
  const {
    // Common props
    center, info, sm, nm, xLg, xxxLg, xxs, xs,
    clickable, rounded, outlined, wFull, link, circle,
    n2, fs3, password, mb1, row, alignCenter, justifyStart, flexWrap,
    justifyCenter, alignCenter: alignCenterProp, wFull: wFullProp, hFull,
    rounded: roundedProp, center: centerProp,
    // Icon props
    alert, alignJustify, arrowBack, bank, barcode, calendar, cartArrowDown,
    close, check, desktop, down, download, downOpen, email, gamepad,
    leftOpen, infoCircle, maintenance, menu, pdfDouble, power, rightOpen,
    search, cog, tooltipMessage, upload, upOpen, up, transactions, user,
    users, trashEmpty, home, userPermission, secret, edit, pencil,
    folderOpen, heartbeat, briefcase, listAlt, book, handPointerO,
    chatEmpty, aiAgent, circled, bordered, bgColored, rotate90, bgColor,
    // Input props
    rg, cpf, cnpj, currency, phone, barcode: barcodeProp, number,
    textarea, date, alignCenter: alignCenterInput, transparent,
    countryState, maxLength, minLength,
    // Margin and padding props
    ml3, p2, fs2, p1, xss, auto, ml1, n3, p3, mb5, mb2, mt2, pl1, pr1, mb3,
    // Font size props
    fs1, fs4, fs5, fs6,
    // Title props
    capitalize, fw3, uppercase, lowercase, error, cursorPointer, noWrap, ellipsis, justify,
    // Color props
    white, darkGreen, black, lightRed, green,
    // Tooltip props
    arrowTopPosition, arrowLeftPosition, bottom, top, left, right,
    // Floating props
    _floatingElementAnchor, _floatingElementStyle,
    // Other common props
    keyOfLabel, windowWidth, col, dataTestId, justifySpaceBetween, topRight,
    ...domProps
  } = props;

  return domProps;
};
