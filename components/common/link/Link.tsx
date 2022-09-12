import { FC, ReactElement } from "react";

import NextLink from "next/link";

type LinkPropsTypes = {
  href: string;
  title: string;
  classes?: string;
};

export const Link: FC<LinkPropsTypes> = ({
  href,
  title,
  classes,
}): ReactElement => (
  <li className={classes}>
    <NextLink href={href}>
      <a style={{ color: "whitesmoke", textTransform: "uppercase" }}>
        {title}
      </a>
    </NextLink>
  </li>
);
