'use client';

import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, X } from 'lucide-react';

interface BookingModalProps {
  senderName: string;
  prospectName: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  senderName,
  prospectName,
  onClose,
}) => {
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#121620] border border-white/15 p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d7fe00]/10 border border-[#d7fe00]/30 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#d7fe00]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Book Intro Meeting</h3>
              <p className="text-xs text-zinc-400">
                Direct schedule with {senderName} for {prospectName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 rounded-2xl bg-[#090b10] border border-white/10 flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Meeting Confirmed!</h4>
            <p className="text-sm text-zinc-300">
              Scheduled for <strong className="text-[#d7fe00]">{selectedDate}</strong> at{' '}
              <strong className="text-[#d7fe00]">{selectedTime}</strong>.
            </p>
            <p className="text-xs text-zinc-400 max-w-xs">
              A calendar invitation has been sent to <strong>{email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 mt-2 rounded-xl bg-[#d7fe00] text-black font-extrabold text-sm hover:bg-[#c5ea00] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Date Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                Select Date
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Today', 'Tomorrow', 'Next Tuesday'].map((date) => (
                  <button
                    key={date}
                    type="button"
                    onClick={() => setSelectedDate(date)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      selectedDate === date
                        ? 'bg-[#d7fe00] border-[#d7fe00] text-black font-bold shadow'
                        : 'bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#d7fe00]" /> Select Time (30 Min)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['10:00 AM', '2:00 PM', '4:30 PM'].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      selectedTime === time
                        ? 'bg-[#d7fe00] border-[#d7fe00] text-black font-bold shadow'
                        : 'bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* User Input */}
            <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-zinc-400">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-10 px-3 bg-[#090b10] border border-white/10 rounded-xl text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-[#d7fe00]"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-zinc-400">Work Email</label>
                <input
                  type="email"
                  placeholder="john@prospect.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 px-3 bg-[#090b10] border border-white/10 rounded-xl text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-[#d7fe00]"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#d7fe00] hover:bg-[#c5ea00] text-black font-extrabold text-sm transition-all shadow-lg shadow-[#d7fe00]/20 cursor-pointer"
            >
              Confirm Meeting
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
