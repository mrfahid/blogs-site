"use client";
import {
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
// import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";


export function Footer() {
  return ( 
    <div className="">
      <div className="max-w-3xl mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://personal-portfolio-with-cms.vercel.app/"
              src="" 
              name="Shah Fahid"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <FooterLink href="https://shahfahid.vercel.app/" target="_blank">Shah Fahid</FooterLink>
                <FooterLink href="shahfahidbaloch@gmail.com">Email</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="https://github.com/mrfahid">
                  Github
                </FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="ShahFahid™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.instagram.com/mr_fahid.dev/" icon={BsInstagram} />
            <FooterIcon href="https://x.com/PUBGLOVERS43297" icon={BsTwitter} />
            <FooterIcon href="https://github.com/mrfahid" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </div>
  );
}
