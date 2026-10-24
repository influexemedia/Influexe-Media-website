// Server-rendered year. Changing only at a year boundary makes hydration mismatches negligible.
export default function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}
