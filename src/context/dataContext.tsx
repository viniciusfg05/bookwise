import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";

interface BooksProviderProps {
  children: ReactNode;
}

interface RatingProps {
  [x: string]: any;
  id: string,
  rate: number,
  description: string
  created_at: Date,
  book_id: string;
  user_id: string;
  user: {
    id: string,
    name: string,
    avatar_url: string,
    email: string,
    created_at: Date,
  }
}

interface CategoriesProps {
  id: string,
  name: string
}

interface ExplorerProps {
  title: string,
  image: string,
  author: string,
  summary: string,
  totalPages: number,
  id: string
  totalRating?: number;
  categories: CategoriesProps[],
  ratings: RatingProps[],
}

interface BooksContextProps {
  dataExplorer: ExplorerProps[]
  setDataExplorerContext: (data: ExplorerProps[]) => void;
  setOpenContext: (boolean: boolean) => void;
  open: boolean;
}




export const BooksContext = createContext({} as BooksContextProps);

export function BooksProvider({ children }: BooksProviderProps) {
  const [dataExplorer, setDataExplorer] = useState<ExplorerProps[]>([])
  const [open, setOpen] = useState(false)

  function setDataExplorerContext(data: ExplorerProps[]) {
    setDataExplorer(data)
  }

  function setOpenContext(boolean: boolean) {
    setOpen(boolean)
  }
  return (
    <BooksContext.Provider
      value={{
        dataExplorer,
        setDataExplorerContext,
        setOpenContext,
        open,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
