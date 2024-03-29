import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { IoSearchSharp, IoBagOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-3xl" style={{ fontFamily: "initial" }}>
              ZEWAR
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <ul className="hidden lg:flex gap-14 justify-start ml-2">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </ul>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <Link href="/festivitySearch">
          <NavbarItem
            className="hidden md:flex"
            style={{
              border: 1,
              borderRadius: 50,
              borderColor: "black",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p
                style={{ fontSize: 20, fontFamily: "initial", marginRight: 10 }}
              >
                {/* Festivity Finder */}
              </p>
              {/* <CiLocationArrow1 size={20} /> */}
            </div>
          </NavbarItem>
        </Link>
      </NavbarContent>
    </NextUINavbar>
  );
};
