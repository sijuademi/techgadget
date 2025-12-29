import { AuthProvider } from "./AuthContext";
import { FilterProvider } from "./FilterContext";
import { SearchProvider } from "./SearchContext";

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <FilterProvider>
        <SearchProvider>{children}</SearchProvider>
      </FilterProvider>
    </AuthProvider>
  );
}

export default AppProviders;
