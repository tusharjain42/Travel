// app/components/Header.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import { getSession, signOut } from "next-auth/react";
import styles from "@/styles/Header.module.scss";

interface SessionUser {
  name?: string;
  email?: string;
  image?: string;
}

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [session, setSession] = useState<{ user?: SessionUser } | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchSession();
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className={`${styles.Header} ${sticky ? "sticky" : ""}`}>
      <Navbar collapseOnSelect expand="lg" className={`${styles.HdrInr} bg-body-tertiary`}>
        <Container>
          <Link href="/" className={styles.Logo}>
            <Image src="/assets/travel-logo.png" alt="Logo" />
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.NavBtn} />
          <Navbar.Collapse id="responsive-navbar-nav" className={styles.NavCustom}>
            <nav>
              <Link className={styles.NavLink} href="/" passHref>
                Home
              </Link>
              <Link className={styles.NavLink} href="/about-us" passHref>
                About Us
              </Link>
              <Link className={styles.NavLink} href="/faq" passHref>
                FAQ
              </Link>
              <Link className={styles.NavLink} href="/contactus" passHref>
                Contact Us
              </Link>
            </nav>

            <Link href="tel:+000123456789" className={styles.NavLinkRt}>
              <Image src="/assets/call-icon.png" alt="Call" /> (000) 123 456 789
            </Link>

            {session ? (
              <NavDropdown
                title={
                  <div className={styles.ProfileDropdownTrigger}>
                    <Image
                      src={session.user?.image || "/assets/user-icon-trvl.png"}
                      roundedCircle
                      alt="Profile"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    {session.user?.name || "Profile"}
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <div style={{ padding: "10px", textAlign: "left" }}>
                  <NavDropdown.Item style={{ fontWeight: "bold", marginBottom: "5px" }}>
                    Hi, {session.user?.name || "User"}
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px", color: "#666", marginBottom: "5px" }}>
                    {session.user?.email || "Email"}
                  </NavDropdown.Item>
                  <hr style={{ margin: "10px 0" }} />
                  <NavDropdown.Item as={Link} href="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            ) : (
              <Link href="/verify-email" className={styles.NavLinkRt}>
                <Image src="/assets/user-icon-trvl.png" alt="Sign In" /> Sign In
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
