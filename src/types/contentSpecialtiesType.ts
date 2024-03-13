export interface IContentPage {
  key: string;
  content: ({ currentPath }: { currentPath: string }) => JSX.Element;
}
