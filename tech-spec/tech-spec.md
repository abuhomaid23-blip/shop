# Tech Spec — Door To Door Need

## 1. Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.3 | UI framework |
| `react-dom` | ^18.3 | DOM renderer |
| `lucide-react` | ^0.460 | Icons (truck, headset, check-circle, search, menu, x, etc.) |
| `tailwindcss` | ^3.4 | Utility-first CSS (pre-installed via webapp-building skill) |
| `clsx` | ^2.1 | Conditional class joining (pre-installed with Tailwind) |
| `tailwind-merge` | ^2.5 | Tailwind class conflict resolution (pre-installed) |

No additional animation libraries needed — all animations are lightweight CSS transitions and keyframes.

## 2. Component Inventory

### Reusable Components (shared across sections)

| Component | Props | Description |
|-----------|-------|-------------|
| `Button` | `variant: 'primary' \| 'secondary'`, `children`, `onClick`, `className` | Amber (Order) and Teal (Add to Cart) variants. Hover: scale(1.02) + darken. |
| `IconButton` | `icon: LucideIcon`, `onClick`, `badge?: number` | Circular gray button for header actions (cart with badge). |
| `ProductCard` | `product: Product` | Full card with image, discount badge, name, categories, pricing, and two action buttons. Hover: lift + shadow intensify. |
| `SectionHeader` | `subtitle?: string`, `title: string`, `description?: string` | Centered text block used above Products and Info sections. |
| `CategoryBubble` | `category: Category` | Circle with icon + label for the category grid. |
| `Drawer` | `isOpen: boolean`, `onClose: () => void`, `side: 'left' \| 'right'`, `children`, `title` | Slide-out panel with backdrop. CSS transition 300ms ease-in-out. |

### Section Components (page-level, composed from reusable + primitives)

| Component | Description |
|-----------|-------------|
| `Header` | Sticky navbar with logo, nav links (desktop), icon buttons. Mobile: hamburger opens left drawer. |
| `HeroSection` | Two-column gradient hero with heading, subheading, CTA button, and SVG illustration. |
| `TrustBar` | 3-column icon + text grid (Best Quality, Fast Delivery, 24/7 Support). |
| `CategoryGrid` | Responsive auto-fit grid of `CategoryBubble`s. |
| `ProductsSection` | Section header + responsive product grid of `ProductCard`s. |
| `WhyChooseUs` | Centered section header + 3-column feature grid. |
| `Footer` | 4-column dark teal footer with links and social placeholder. |

### shadcn/ui Components

Only one shadcn primitive is used directly:
- **Sheet** — powers the `Drawer` component for cart and mobile nav (already pre-installed in the webapp-building stack).

### Custom Hooks

| Hook | Purpose |
|------|---------|
| `useCart` | React Context hook providing cart array, add/remove/update functions, total count, total price, and `openCartDrawer()` / `closeCartDrawer()`. |
| `useScrollLock` | Locks body scroll when any drawer is open. |

## 3. Animation & Interaction Implementation

| Interaction | Implementation | Specs |
|-------------|---------------|-------|
| **Cart Drawer** | shadcn Sheet with `side="right"` | `300ms`, `ease-in-out`, `translateX(0)` from right. Backdrop: `bg-black/50`. |
| **Nav Drawer (mobile)** | shadcn Sheet with `side="left"` | Same 300ms ease-in-out from left. Contains logo, links, categories. |
| **Hero floating** | CSS `@keyframes float` on SVG wrapper | `translateY(0) → translateY(-10px) → translateY(0)`, `6s`, `ease-in-out`, `infinite` |
| **Button hover** | Tailwind `hover:` utilities | `hover:scale-[1.02] hover:brightness-95 transition-all duration-200` |
| **Product card hover** | Tailwind `hover:` utilities | `hover:-translate-y-1 hover:shadow-lg transition-all duration-300` |
| **Smooth scroll** | CSS `scroll-behavior: smooth` on `html` | Global, no JS needed |
| **Badge entrance** | CSS transition on count change | Subtle scale bump on cart badge when item added |

**Rationale for no animation library:** All animations are simple state transitions (drawer open/close), CSS keyframes (hero float), and Tailwind hover utilities. Adding Framer Motion or GSAP would be unnecessary overhead.

## 4. State & Logic

### Cart State (React Context)

```typescript
interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  totalCount: number;
  totalPrice: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}
```

- `addItem`: If product already in cart, increment quantity; else add with quantity 1.
- `removeItem`: Filter out by id.
- `updateQuantity`: Set quantity directly; if 0, remove.
- `totalCount` / `totalPrice`: Derived via `useMemo`.
- `isCartOpen`: Controlled by header cart icon click and "Add to Cart" buttons.

### Data Flow

```
App.tsx
├── CartProvider (wraps everything)
│   ├── Header (reads totalCount, calls openCart)
│   ├── HeroSection
│   ├── TrustBar
│   ├── CategoryGrid
│   ├── ProductsSection (calls addItem, openCart)
│   ├── WhyChooseUs
│   └── Footer
│
└── CartDrawer (mounted in App, reads isCartOpen, items, closeCart)
```

All product/category data lives in a static `src/data/store.ts` file for easy editing — no backend required.

## 5. Other Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Data storage** | Static `.ts` file (`src/data/store.ts`) | User wants "simple to edit" — no CMS, no JSON fetch. Just edit the TS array and rebuild. |
| **Images** | AI-generated hero illustration + generated product/category images | Reference site uses product photos; we'll generate placeholder lifestyle product images to match the e-commerce feel. |
| **Routing** | Single-page, no router | Reference site is a single landing page with overlays; no multi-page navigation needed. |
| **Currency** | Fixed "৳" (BDT) | Matches reference site's Bangladesh market. Editable in data file. |
| **Responsiveness breakpoints** | `sm:640 md:768 lg:1024 xl:1280 2xl:1536` | Standard Tailwind breakpoints. Product grid: 1 col mobile → 2 sm → 3 md → 4 lg → 5 xl. |