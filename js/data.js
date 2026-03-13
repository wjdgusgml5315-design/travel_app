const mockData = {
  trips: [
    {
      id: 1,
      title: "제주도 감성 여행",
      city: "제주",
      startDate: "2026.04.10",
      endDate: "2026.04.13",
      status: "active",
      image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "도쿄 맛집 탐방",
      city: "도쿄",
      startDate: "2026.05.20",
      endDate: "2026.05.24",
      status: "planned",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80"
    }
  ],
  recommendedTrips: [
    { title: "파리 낭만 여행", city: "파리", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80" },
    { title: "뉴욕 도시 탐험", city: "뉴욕", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80" }
  ],
  todaySchedule: [
    { id: 101, name: "함덕 해수욕장", type: "tour", time: "10:00", image: "https://images.unsplash.com/photo-1590424748043-4dc975bbbd80?auto=format&fit=crop&w=200&q=80" },
    { id: 102, name: "델문도 카페", type: "cafe", time: "11:30", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=200&q=80" },
    { id: 103, name: "동문재래시장", type: "tour", time: "14:00", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=200&q=80" }
  ]
};

console.log("TripFlow Mock Data Loaded");
