const engToPersian = (s) => s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

//english to arabic
// const e2a = (s) => s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

// //persian to english
// const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
// //arabic to english
// const a2e = (s) => s.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

// //pesian to arabic
// const p2a = (s) => s.replace(/[۰-۹]/g, (d) => "٠١٢٣٤٥٦٧٨٩"["۰۱۲۳۴۵۶۷۸۹".indexOf(d)]);
// //arabic to persian
// const a2p = (s) => s.replace(/[٠-٩]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"["٠١٢٣٤٥٦٧٨٩".indexOf(d)]);

export default engToPersian;
