import React from 'react';

export default function QuickSpaceFooter() {
  const companyLinks = ["Features", "About", "Service", "Team"];
  const helpLinks = ["FAQ", "Blog", "Contact Us", "Support"];
  const resourcesLinks = ["Guides and resources", "Team", "Tools", "Support"];
 
  return (
    <footer className="bg-gray-900 text-white py-16 secondary-font">
      <div className="container mx-auto max-w-[1350px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Logo and Contact Info Column */}
          <div className="col-span-2 lg:col-span-2 ">
            <div className="mb-6">
              <img src="/img/Logo (1).png"/>
            </div>
            <p className="text-gray-400 mb-6">
            From idea to impact — we scale your vision with data-driven strategies.


            </p>
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-gray-400">+977 9765409928</span>
            </div>
            <div className="flex items-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-gray-400">msamyog37@gmail.com</span>
            </div>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="border border-gray-700 inline-flex items-center px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5C3,21.3 3.8,22 4.5,22H19.5C20.3,22 21,21.3 21,20.5V3.5C21,2.8 20.3,2 19.5,2H4.5C3.8,2 3,2.8 3,3.5V20.5M18.5,11L12,16L5.5,11V17.5H18.5V11M18.5,5.5V9L12,13.5L5.5,9V5.5H18.5Z"></path>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Available on the</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
              <a href="#" className="border border-gray-700 inline-flex items-center px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"></path>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Useful Links Column */}
          <div className="col-span-2 ">
          <div className="flex flex-col md:flex-row md:gap-[50px] gap-12 ">
            <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-6 primary-font">Useful Links</h3>
            <ul className="space-y-4">
              {companyLinks.map(companyLink=>(
                 <li><a href="#" className="text-gray-400 hover:text-white hover:border-b-2 hover:border-white transition-colors">{companyLink}</a></li>
              ))}
            
             
            </ul>
            </div>
            <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-6 primary-font">Help & Support</h3>
            <ul className="space-y-4">
            {helpLinks.map(helpLink=>(
                 <li><a href="#" className="text-gray-400 hover:text-white hover:border-b-2 hover:border-white transition-colors">{helpLink}</a></li>
              ))}
            </ul>
            </div>
            <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-6 primary-font">Resources</h3>
            <ul className="space-y-4">
            {resourcesLinks.map(resourcesLink=>(
                 <li><a href="#" className="text-gray-400 hover:text-white hover:border-b-2 hover:border-white transition-colors">{resourcesLink}</a></li>
              ))}
            </ul>
            </div>
            </div>
          </div>

          {/* Help & Support Column */}
         
        </div>

        {/* Bottom Section with Copyright and Social Icons */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © All Right Reserved
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}