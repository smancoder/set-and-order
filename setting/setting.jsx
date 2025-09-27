import React, { useState } from 'react';
import { 
  Shield, User, Palette, Bell, Lock, Globe, CreditCard,
  Mail, Key, ShieldCheck, Trash2, Phone, Camera, MapPin,
  Moon, Sun, Languages, Type, Smartphone, MessageSquare,
  Eye, Activity, Monitor, Settings, Link, Banknote, FileText,
  Menu, X
} from 'lucide-react';

import './SettingsPage.css'; // Import external CSS

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('account');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    { id: 'account', label: 'Account Settings', icon: Shield, emoji: '🔐' },
    { id: 'personal', label: 'Personal Info', icon: User, emoji: '📞' },
    { id: 'appearance', label: 'Appearance', icon: Palette, emoji: '🎨' },
    { id: 'notifications', label: 'Notifications', icon: Bell, emoji: '🔔' },
    { id: 'privacy', label: 'Privacy & Security', icon: Lock, emoji: '🔒' },
    { id: 'connected', label: 'Connected Accounts', icon: Globe, emoji: '🌐' },
    { id: 'billing', label: 'Billing & Subscriptions', icon: CreditCard, emoji: '💳' }
  ];

  const SettingButton = ({ icon: Icon, children, variant = 'default', className = '' }) => {
    return (
      <button className={`setting-button ${variant} ${className}`}>
        <div className="setting-left">
          <Icon size={20} />
          <span>{children}</span>
        </div>
        <div className="indicator"></div>
      </button>
    );
  };

  const SectionHeader = ({ children }) => (
    <h3 className="section-header">{children}</h3>
  );

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div className="section">
            <SectionHeader>🔐 Account Settings</SectionHeader>
            <SettingButton icon={Mail}>Change Email</SettingButton>
            <SettingButton icon={Key}>Change Password</SettingButton>
            <SettingButton icon={ShieldCheck}>Two-Factor Authentication (2FA)</SettingButton>
            <SettingButton icon={Trash2} variant="danger">Delete Account / Deactivate Account</SettingButton>
          </div>
        );
      case 'personal':
        return (
          <div className="section">
            <SectionHeader>📞 Personal Info</SectionHeader>
            <SettingButton icon={User}>Change Name</SettingButton>
            <SettingButton icon={Phone}>Change Contact Number</SettingButton>
            <SettingButton icon={Camera}>Change Profile Picture</SettingButton>
            <SettingButton icon={MapPin}>Address Details</SettingButton>
          </div>
        );
      case 'appearance':
        return (
          <div className="section">
            <SectionHeader>🎨 Appearance / Display</SectionHeader>
            <SettingButton icon={Moon}>Dark Mode / Light Mode Toggle</SettingButton>
            <SettingButton icon={Languages}>Language Selection</SettingButton>
            <SettingButton icon={Type}>Font Size or Layout Preferences</SettingButton>
          </div>
        );
      case 'notifications':
        return (
          <div className="section">
            <SectionHeader>🔔 Notifications</SectionHeader>
            <SettingButton icon={Mail}>Enable/Disable Email Notifications</SettingButton>
            <SettingButton icon={Smartphone}>Push Notification Settings</SettingButton>
            <SettingButton icon={MessageSquare}>SMS Alerts</SettingButton>
          </div>
        );
      case 'privacy':
        return (
          <div className="section">
            <SectionHeader>🔒 Privacy & Security</SectionHeader>
            <SettingButton icon={Eye}>Control Who Can See Your Profile</SettingButton>
            <SettingButton icon={Activity}>Activity Status (Online/Offline)</SettingButton>
            <SettingButton icon={Monitor}>Manage Connected Devices / Sessions</SettingButton>
            <SettingButton icon={Settings}>App Permissions</SettingButton>
          </div>
        );
      case 'connected':
        return (
          <div className="section">
            <SectionHeader>🌐 Connected Accounts</SectionHeader>
            <SettingButton icon={Link}>Link/Unlink Google, Facebook, etc.</SettingButton>
            <SettingButton icon={Key}>Manage API Keys</SettingButton>
          </div>
        );
      case 'billing':
        return (
          <div className="section">
            <SectionHeader>💳 Billing & Subscriptions</SectionHeader>
            <SettingButton icon={CreditCard}>Payment Methods</SettingButton>
            <SettingButton icon={Banknote}>Subscription Plan Details</SettingButton>
            <SettingButton icon={FileText}>Download Invoices</SettingButton>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="settings-page">
      {/* Mobile Header */}
      <div className="mobile-header">
        <h1>Settings</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="main-layout">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h1>Settings</h1>
            <p>Manage your account preferences</p>
          </div>
          <nav>
            <ul>
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <li key={section.id}>
                    <button
                      onClick={() => {
                        setActiveSection(section.id);
                        setIsSidebarOpen(false);
                      }}
                      className={`sidebar-item ${activeSection === section.id ? 'active' : ''}`}
                    >
                      <span>{section.emoji}</span>
                      <Icon size={18} />
                      <span>{section.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="overlay"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="content">
          <div className="content-box">
            {renderSectionContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
