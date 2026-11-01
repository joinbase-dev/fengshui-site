// Interface text around the services.
export const serviceUi = {
  // The overlay's close button, as the design labels it.
  close: "ปิดหน้าต่าง",
  // Not in the design: screen-reader name of the overlay's contact icons.
  contact: "ช่องทางติดต่อ",
  // Not in the design: the service pages (app/services/[slug]), derived from the overlay.
  breadcrumbLabel: "ตำแหน่งของหน้านี้",
  home: "หน้าแรก",
  otherServices: "บริการอื่น",
  // Not in the design: screen-reader text of the overlay's photo carousel.
  carousel: {
    // Followed by the service's name.
    label: "ภาพบริการ",
    previous: "ภาพก่อนหน้า",
    next: "ภาพถัดไป",
    // {current} and {total} are filled in.
    position: "ภาพที่ {current} จาก {total}",
  },
} as const;
