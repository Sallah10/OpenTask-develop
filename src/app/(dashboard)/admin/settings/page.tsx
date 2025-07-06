'use client';
import React, { useState } from 'react';

const Page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [rowStatus, setRowStatus] = useState<boolean[]>(Array(6).fill(true));

  const handleToggle = (idx: number) => {
    setRowStatus((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  const tabs = [
    {
      label: 'Categories',
      content: (
        <div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Task Categories</h1>
              <p className="font-semibold text-[#7E7E7E]">
                Manage The categories available for Tasks
              </p>
            </div>
            <div className="rounded-xl border-2 border-t-4 border-[#7CBAFD] px-3 py-2 font-[400] text-[#3B82F6]">
              {/* <Image/> */}
              <h2>+ Add Category</h2>
            </div>
          </div>
          <div>
            <table
              style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: 0,
                border: '2px solid #ABB9C9',
                borderRadius: '12px',
                overflow: 'hidden',
                marginTop: '25px',
              }}
            >
              <thead>
                <tr
                  style={{
                    background: '#D8E6FD',
                    borderBottom: '2px solid #ABB9C9',
                  }}
                >
                  <th
                    style={{
                      padding: '20px',
                      border: 'none',
                      textAlign: 'left',
                    }}
                  >
                    Column 1
                  </th>
                  <th
                    style={{
                      padding: '20px',
                      border: 'none',
                      textAlign: 'left',
                    }}
                  >
                    Column 2
                  </th>
                  <th
                    style={{
                      padding: '20px',
                      border: 'none',
                      textAlign: 'left',
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      padding: '20px',
                      border: 'none',
                      textAlign: 'left',
                    }}
                  >
                    Column 4
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((_, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        padding: '20px',
                        border: 'none',
                        borderBottom: i !== 5 ? '2px solid #ABB9C9' : 'none',
                      }}
                    >
                      Row {i + 1} - 1
                    </td>
                    <td
                      style={{
                        padding: '20px',
                        border: 'none',
                        borderBottom: i !== 5 ? '2px solid #ABB9C9' : 'none',
                      }}
                    >
                      Row {i + 1} - 2
                    </td>
                    <td
                      style={{
                        padding: '20px',
                        border: 'none',
                        borderBottom: i !== 5 ? '2px solid #ABB9C9' : 'none',
                      }}
                    >
                      {/* Switch */}
                      <label className="inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          checked={rowStatus[i]}
                          onChange={() => handleToggle(i)}
                          className="peer sr-only"
                        />
                        <div className="peer h-6 w-11 rounded-full bg-gray-200 transition-all peer-checked:bg-blue-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500"></div>
                        <div
                          className={`absolute ml-1 mt-1 h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                            rowStatus[i] ? 'translate-x-5' : ''
                          }`}
                          style={{ pointerEvents: 'none' }}
                        ></div>
                        <span className="ml-3 text-sm font-medium">
                          {rowStatus[i] ? 'Active' : 'Inactive'}
                        </span>
                      </label>
                    </td>
                    <td
                      style={{
                        padding: '20px',
                        border: 'none',
                        borderBottom: i !== 5 ? '2px solid #ABB9C9' : 'none',
                      }}
                    >
                      Row {i + 1} - 4
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    { label: 'Platform', content: <div>Platform content goes here.</div> },
    { label: 'Payments', content: <div>Payments content goes here.</div> },
    {
      label: 'Notifications',
      content: <div>Notifications content goes here.</div>,
    },
  ];

  return (
    <main>
      <h1 className="my-6 text-3xl font-bold text-black">Settings</h1>
      <div className="flex w-[560px] gap-6 rounded-md bg-white px-4 py-6 text-black">
        {tabs.map((tab, idx) => (
          <h2
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={`cursor-pointer rounded px-4 py-3 transition ${
              activeTab === idx ? 'bg-blue-600 font-bold text-white' : ''
            }`}
          >
            {tab.label}
          </h2>
        ))}
      </div>
      <div className="mt-6 rounded-md bg-white px-4 py-6 text-black lg:mr-10">
        {tabs[activeTab]?.content}
      </div>
    </main>
  );
};

export default Page;
